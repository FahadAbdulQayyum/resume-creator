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
import { useState, useEffect, useRef } from "react";

type CardWithFormProps = {
    id: number | undefined;
    data: any; // Define a proper type if possible
};

export function CardWithForm() {

    const nameRef = useRef<HTMLInputElement>(null);
    const fatherNameRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const cityRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLTextAreaElement>(null);
    const genderRef = useRef<string | null>(null);
    const pushNotificationRef = useRef<HTMLButtonElement>(null);

    // const nameRef = useRef<HTMLInputElement>(null);
    // const fatherNameRef = useRef<HTMLInputElement>(null);
    // const countryRef = useRef<HTMLInputElement>(null);
    // const cityRef = useRef<HTMLInputElement>(null);
    // const summaryRef = useRef<HTMLTextAreaElement>(null);

    const formSubmit = () => {
        console.log("Name:", nameRef.current?.value);
        console.log("Father Name:", fatherNameRef.current?.value);
        console.log("Country:", countryRef.current?.value);
        console.log("City:", cityRef.current?.value);
        console.log("Summary:", summaryRef.current?.value);
        console.log("Gender Updated:", genderRef.current);
        console.log("Push Notifications Enabled:", pushNotificationRef.current?.ariaChecked);

        const objData = {
            name: nameRef.current?.value,
            fathername: fatherNameRef.current?.value,
            country: countryRef.current?.value,
            city: cityRef.current?.value,
            summary: summaryRef.current?.value,
            gender: genderRef.current,
            push: pushNotificationRef.current?.ariaChecked
        }

        // console.log("Name:", nameRef.current?.value);
        // console.log("Father's Name:", fatherNameRef.current?.value);
        // console.log("Country:", countryRef.current?.value);
        // console.log("City:", cityRef.current?.value);
        // console.log("Summary:", summaryRef.current?.value);

        // objData - Continue from here tomorrow
    }

    const handleGenderChange = (value: string) => {
        genderRef.current = value; // Update ref when the selection changes
        console.log("Gender Updated:", genderRef.current);
    };

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
                            <Input
                                ref={nameRef}
                                id="name" placeholder="Enter your name" />
                            <Separator orientation="vertical" />
                            <Input
                                ref={fatherNameRef}
                                id="fathername" placeholder="Enter your father name" />
                        </div>
                        <div className="flex flex-row items-center justify-center space-x-1.5">
                            <Input
                                ref={countryRef}
                                id="country" placeholder="Enter your Country" />
                            <Separator orientation="vertical" />
                            <Input
                                ref={cityRef}
                                id="city" placeholder="Enter your City" />
                        </div>
                        <Textarea
                            ref={summaryRef}
                            placeholder="Type your summary..." />
                        <div className="flex flex-col space-y-1.5">
                            <Select
                                onValueChange={handleGenderChange}
                                ref={genderRef}
                            >
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    {/* <SelectItem value="male" ref={genderRef}>Male</SelectItem>
                                    <SelectItem value="female" ref={genderRef}>Female</SelectItem> */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </form>
            </CardContent >
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button
                    onClick={formSubmit}
                >Submit</Button>
            </CardFooter>
            <div className="flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Send notifications to device.</p>
                </div>
                <Switch
                    ref={pushNotificationRef}
                />
            </div>
        </Card >
    );
}
