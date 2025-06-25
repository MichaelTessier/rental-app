import mongoose, { FilterQuery, Model, Query } from "mongoose"
import { Maybe } from "../__generated__/graphql"

type Pagination = {
  total: number
  page: number
  limit: number
}

const PAGINATION = {
  LIMIT: 10,
  DEFAULT_PAGE: 1,
  TOTAL: 0,
} as const

class QueryService<T> {
  model: Model<T>
  response: Query<T[], T>
  pagination: Pagination = {
    total: PAGINATION.TOTAL,
    page: PAGINATION.DEFAULT_PAGE,
    limit: PAGINATION.LIMIT,
  }

  constructor(model: Model<T>) {
    this.model = model
    this.response = model.find({})
  }

  search(query: Maybe<string> | undefined): this {
    if(!query) return this

    const searchById = {
      _id: query,
    }

    const searchByName = {
      name: {
        $regex: query,
        $options: "i",
      }
    }
    // TODO: clean , separate function? 
    const searchQuery = mongoose.isValidObjectId(query) ? searchById : searchByName

    this.response = this.model.find({ ...searchQuery })
    
    return this
  }

  filters(filters: FilterQuery<Model<T>> | undefined): this {
    if(!filters || !Object.keys(filters).length) return this
    
    this.response = this.model.find({ ...filters })

    return this
  }

  async paginate(page: Maybe<number> = PAGINATION.DEFAULT_PAGE, limit: Maybe<number> = PAGINATION.LIMIT): Promise<this> {
    const isValidPage = page && Number.isInteger(page) && page > 0
    const isValidLimit = limit && Number.isInteger(limit) && limit > 0

    if(!isValidPage || !isValidLimit) return this

    const skip = (page - 1) * limit;

    if(skip < 0) return this

    const totalCount = await this.response.clone().countDocuments()

    this.response = this.response.skip(skip).limit(limit)

    this.pagination = {
      total: totalCount,
      page: page,
      limit: limit,
    }

    return this
  }
}

export default QueryService;