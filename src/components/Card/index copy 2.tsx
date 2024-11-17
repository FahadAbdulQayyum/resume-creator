// "use client"

import { BellRing } from "lucide-react"
import { Separator } from "@/components/ui/separator"

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
// import { useState } from "react"

type CardWithFormProps = {
    idd: number,
    data: any; // Define a proper type if possible
}

export async function getStaticProps() {
    const res = await fetch('/Data/data.json');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export async function CardWithForm({ idd, data }: CardWithFormProps) {

    // const [dataObj, setDataObj] = useState<any>(data || null);

    const hey = () => console.log('idd, data...', idd, data)
    hey()

    return (
        <Card className="w-[500px]">
            <CardHeader>
                <CardTitle>Create Your Resume</CardTitle>
                <CardDescription>Get your resume created easily and edit it anytime.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            <Input id="name" placeholder="Enter your name" />
                            <Separator orientation="vertical" />
                            <Input id="fathername" placeholder="Enter your father name" />
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            <Input id="country" placeholder="Enter your Country" />
                            <Separator orientation="vertical" />
                            <Input id="city" placeholder="Enter your City" />
                        </div>
                        <Textarea placeholder="Type your summary..." />
                        <div className="flex flex-col space-y-1.5">
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
