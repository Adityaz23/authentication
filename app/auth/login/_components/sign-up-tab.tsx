"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
const signUpSchema = z.object({
  name: z.string().min(1),
  email: z.email().min(1),
  password: z.string().min(6),
});
type SignUpForm = z.infer<typeof signUpSchema>;

export function SignUp() {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: " ",
      email: " ",
      password: " ",
    },
  });

  const { isSubmitting } = form.formState;

  async function handleSignUp(data: SignUpForm) {
    //if we are using server action then we will use this function
    // auth.api.signUpEmail({headers: await headers(),body:{
    // email,
    // name,
    // password
    // }})

    // but we are in the client side so we will use the auth client instead.
    const res = await authClient.signUp.email({
      ...data,
      callbackURL: "/",
    },{
        onError:(error) =>{
            toast.error(error.error.message)
        }
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return (
    <Form {...form}>
      <form
        className="space-y-4 mt-2"
        onSubmit={form.handleSubmit(handleSignUp)}
      >
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          className="text-center ml-30"
          disabled={isSubmitting}
          type="submit"
        >
          <LoadingSwap isLoading={isSubmitting}>Submit form</LoadingSwap>
        </Button>
      </form>
    </Form>
  );
}
