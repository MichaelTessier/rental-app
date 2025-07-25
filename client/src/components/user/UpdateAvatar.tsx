import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
} from "@/components/shadcn/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { useForm } from "react-hook-form"
import { MeDocument, useUpdateAvatarMutation } from "@/graphql/__generated__/types";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner"
import { UpdateAvatarSchema, updateAvatarSchema } from "./user.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { userStore } from "@/store/user";
import { useReactiveVar } from "@apollo/client";
import UserAvatar from "./UserAvatar";
import { ChangeEvent, useState } from "react";
import { Avatar, AvatarImage } from "../shadcn/avatar";

const UpdateAvatar = () => {
  const [avatarPreview, setAvatarPreview] = useState<string>()

  const userState = useReactiveVar(userStore);

  const form = useForm<UpdateAvatarSchema>(
    {
      resolver: zodResolver(updateAvatarSchema),
    }
  );

  const [updateAvatarMutation, { loading} ] = useUpdateAvatarMutation()

  async function onSubmit() {
    if(!avatarPreview) return

    await updateAvatarMutation({
      variables: {
        input: {
          image: avatarPreview,
        }
      },
      onError: () => {
        toast.error(`Error during update`);
      },
      onCompleted: (data) => {
        if(userState.user && data?.updateAvatar?.url) {
          toast.success("Update successful!");
          
          console.log({
                url: data.updateAvatar.url,
                publicId: data.updateAvatar.publicId
              })
          userStore({
            ...userState,
            user: {
              ...userState.user,
              avatar: {
                url: data.updateAvatar.url,
                publicId: data.updateAvatar.publicId
              }
            }
          })
        }
      }
    })
  
  }

  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const IMAGE_MAX_SIZE = 200

    const reader = new FileReader()

    reader.onload = () => {
      const result = reader.result
      // if(result && typeof result === 'string') {
      //   setAvatarPreview(result)
      //   form.setValue("avatar", result, { shouldValidate: true });
      // } 
      if(result && typeof result === 'string') {

        const image = new Image()
        image.src = result

        image.onload = () => {
          let width = image.width
          let height = image.height

          if (width > height && width > IMAGE_MAX_SIZE) {
            height *= IMAGE_MAX_SIZE / width
            width = IMAGE_MAX_SIZE
          } else if (height > IMAGE_MAX_SIZE) {
            width *= IMAGE_MAX_SIZE / height
            height = IMAGE_MAX_SIZE
          }

          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx?.drawImage(image, 0, 0, width, height)
          const base64String = canvas.toDataURL('image/jpeg', 1)

          setAvatarPreview(base64String)
          form.setValue("avatar", base64String, { shouldValidate: true });
        }
      }
      
    }

    if(event.target.files?.[0]) {
      reader.readAsDataURL(event.target.files[0])
    }

  }

  return (
    <div className="w-full">

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-1 flex-col gap-4 bg-muted/40 justify-center ">
            <Card className="mx-auto w-full max-w-lg shadow-lg">
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <FormField 
                      control={form.control}
                      name="avatar"
                      render={({ field: { ref, name, onBlur, onChange } }) => (
                        <FormItem>
                          <FormLabel>Avatar</FormLabel>
                          {avatarPreview 
                            ? (<Avatar className="h-10 w-10">
                                <AvatarImage src={avatarPreview} />
                              </Avatar>
                            ) 
                            : <UserAvatar user={userState.user} />}
                          <FormControl>
                            <Input
                              placeholder="Choose your avatar"
                              type="file"
                              ref={ref}
                              name={name}
                              onBlur={onBlur}
                              onChange={(event) => onChange(handleChange(event))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                  <Button type="submit" className="w-full">
                    { loading ? <div className="h-4 w-4 ml-2" ><Loader  /></div> : null }
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>


  );
};

export default UpdateAvatar;