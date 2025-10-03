import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignIn } from "./_components/sign-in-tab";
import { SignUp } from "./_components/sign-up-tab";

export default function LoginPage() {
  return (
    <Tabs defaultValue="signin" className="mx-auto w-full my-6 px-4">
      <TabsList>
        <TabsTrigger value="signin">SignIn</TabsTrigger>
        <TabsTrigger value="signup">SignUp</TabsTrigger>
      </TabsList>
        <TabsContent value="signin">
          <Card>
            <CardHeader className="text-2xl font-extrabold text-rose-300">
              <CardTitle>SignIn</CardTitle>
              <CardContent>
                <SignIn />
              </CardContent>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          <Card>
            <CardHeader className="text-2xl font-extrabold text-rose-300">
              <CardTitle>SignUp</CardTitle>
              <CardContent>
                <SignUp />
              </CardContent>
            </CardHeader>
          </Card>
        </TabsContent>
    </Tabs>
  );
}
