
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Toast
import toast from "react-hot-toast";

// Utils
import { cn } from "@/lib/utils"


interface Inputs {
  email: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      // Procces and Send to the Backend
    } catch (error) {
      console.log(error);
    }
  }

  const ErrorMessage = ({ text }: { text: any }) => {
    return (
      <div
        className="absolute top-0 right-0 text-sm w-auto h-full flex items-center justify-end pr-2">
        <p
          className="text-red-500">
          {text?.message}
        </p>
      </div>
    );
  }


  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <div className="relative ">
            <Input
              id="email"
              type="text"
              placeholder="m@example.com"
              className={`${errors.email && "border border-red-500"}`}
              {...register("email", {
                required: "Field Requried",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid Email" }
              })} />

            {/* Error Message */}
            <ErrorMessage text={errors.email} />

          </div>
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <span
              onClick={() => {
                toast("We sent you an Email", {
                  icon: "ℹ️"
                })
              }}
              className="ml-auto text-sm underline-offset-4 hover:underline cursor-pointer">
              Forgot your password?
            </span>
          </div>
          <div className="relative">
            <Input
              id="password"
              type="password"
              className={`${errors.password && "border border-red-500"}`}
              {...register("password", { required: "Field Required", })} />

            {/* Error Message */}
            <ErrorMessage text={errors.password} />
          </div>

        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer h-10">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <span
          onClick={() => {
            toast("Request From Admin", {
              icon: "ℹ️"
            })
          }}
          className="underline underline-offset-4 cursor-pointer">
          Sign up
        </span>
      </div>
    </form>
  )
}
