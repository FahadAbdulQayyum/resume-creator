import { BellRing, Check } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
    return (
        // <Card className="w-[350px]">
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Create Your Resume</CardTitle>
                <CardDescription>Get your resume created easily and edit it anytime.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        {/* <div className="flex flex-col space-y-1.5"> */}
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            {/* <Label htmlFor="name">Name</Label> */}
                            <Input id="name" placeholder="Enter your name" />
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        {/* <div className="flex flex-col space-y-1.5"> */}
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            {/* <Label htmlFor="name">Father Name</Label> */}
                            <Input id="name" placeholder="Enter your father name" />
                            <Input id="name" placeholder="Enter your father name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            {/* <Label htmlFor="framework">Gender</Label> */}
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Submit</Button>
            </CardFooter>
            <div className=" flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                        Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Send notifications to device.
                    </p>
                </div>
                <Switch />
            </div>
        </Card>
    )
}
