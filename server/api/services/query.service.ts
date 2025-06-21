import mongoose, { FilterQuery, Model, Query } from "mongoose"
import { Maybe } from "../__generated__/graphql"

class QueryService<T> {
  model: Model<T>
  response: Query<T[], T>

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
    if(!filters) return this

    this.response = this.model.find({ ...filters })

    return this
  }
}

export default QueryService;