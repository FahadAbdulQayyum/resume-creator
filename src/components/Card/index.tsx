"use client";

import { BellRing } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";

type CardWithFormProps = {
    id: number | undefined;
    data: any; // Define a proper type if possible
};

export function CardWithForm({ id, data }: CardWithFormProps) {
    const [dataObj, setDataObj] = useState<any>(data || null);
    // const [dataObjFiltered, setDataObjFiltered] = useState<any>(data.filter((v: any) => v.id === id) || null);
    const [dataObjFiltered, setDataObjFiltered] = useState<any>(
        Array.isArray(data) ? data.filter((v: any) => v.id === id) : null
    );

    // useEffect(() => {
    //     // setDataObjFiltered(dataObj.filter((v: any) => v.id === id))
    //     console.log("Fetched Data:", dataObj);
    //     console.log("Fetched Data Filtered:", dataObjFiltered);
    //     // }, []);
    // }, [dataObj]);
    // // }, [dataObj, dataObjFiltered]);

    useEffect(() => {
        if (Array.isArray(data) && id !== undefined) {
            const filteredData = data.filter((v: any) => v.id === id);
            setDataObjFiltered(filteredData.length > 0 ? filteredData[0] : null);
        }
    }, [data, id]);

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
                            <Input id="name" placeholder="Enter your name" value={dataObjFiltered?.name} />
                            <Separator orientation="vertical" />
                            <Input id="fathername" placeholder="Enter your father name" value={dataObjFiltered?.fathername} />
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            <Input id="country" placeholder="Enter your Country" value={dataObjFiltered?.country} />
                            <Separator orientation="vertical" />
                            <Input id="city" placeholder="Enter your City" value={dataObjFiltered?.city} />
                        </div>
                        <Textarea placeholder="Type your summary..." value={dataObjFiltered?.summary} />
                        <div className="flex flex-col space-y-1.5">
                            <Select value={dataObjFiltered.gender}>
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
            <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                </div>
                <Switch checked={dataObjFiltered.push}
                // onCheckedChange={handleSwitchChange}
                />
            </div>
        </Card>
    );
}
