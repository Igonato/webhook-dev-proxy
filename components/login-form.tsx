import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
    return (
        <Card className="mx-auto max-w-sm min-w-72">
            <CardHeader>
                <CardTitle className="text-2xl">Authentication</CardTitle>
                <CardDescription>Enter your credentials below</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="mail@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <div className="flex gap-4">
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                        <Button variant="outline" className="w-full">
                            Signup
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
