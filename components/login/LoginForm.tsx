import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";

export function LoginForm({
  setIsUser,
}: {
  setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Logo className="mb-5 flex-row" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-card-foreground text-center text-2xl">
            Login to your account
          </CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
            onClick={() => setIsUser((crr) => !crr)}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
