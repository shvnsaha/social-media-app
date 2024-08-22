
import axiosSecure from "@/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";


const Signup = () => {

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        const userData = {
            username,
            email,
            password
        }

        console.log(userData);
        try {
          const res = await axiosSecure.post('/user/register',userData)
          if(res.data.success){
            toast.success(res.data.message)
          }
        } catch (error) {
           toast.error(error.response.data.message);
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="shadow-lg p-8">
                <div className="text-center my-4 space-y-2">
                    <h1 className="font-bold text-xl">Logo</h1>
                    <p className="text-sm">Signup to see photos and videos from your friends</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="space-y-1">
                        <Label>Username</Label>
                        <Input
                         type="text"
                         name="username"
                         className="focus-visible:ring-transparent"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label>Email</Label>
                        <Input
                         type="text"
                         name="email"
                         className="focus-visible:ring-transparent"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label>Password</Label>
                        <Input
                         type="text"
                         name="password"
                         className="focus-visible:ring-transparent"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Button  type="submit">Signup</Button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Signup;