import Navbar from "@/components/Navbar/Navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import PasswordInput from "@/components/PasswordInput";

const formSchema = z.object({
  username: z
    .string()
    .min(8, { message: "Username must be at least 8 characters" })
    .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
  email: z
    .string()
    .email({ message: "Please, enter a valid email" })
    .min(8, { message: "Email must be at least 8 characters" })
    .max(50),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50),
  confirm_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(50)
    .refine(({ password, confirm_password }) => password === confirm_password, {
      message: "Password doesn't match",
      path: ["confirm_password"],
    }),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // SignUp
    console.log(data);
  }

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-20 mb-20">
        <div className="w-96 border rounded bg-gray-100 px-7 py-10 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h4 className="text-2xl mb-7">SignUp</h4>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>Insert your best email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className=" font-medium text-primary underline hover:text-blue-500"
            >
              Login.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
