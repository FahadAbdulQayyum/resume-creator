"use client";

import { useRouter } from 'next/router';
import { CardWithForm } from '@/components/Card'
import { GetStaticProps, GetStaticPaths } from "next";
import '../../app/globals.css'

export const getStaticPaths: GetStaticPaths = async () => {
    // Example: Fetch a list of IDs from your API or database
    const res = await fetch("http://localhost:3000/Data/data.json");
    const items = await res.json();

    // Generate paths for each item (e.g., { params: { id: "1" } })
    const paths = items.map((item: any) => ({
        params: { id: item.id.toString() },
    }));

    return {
        paths, // Pre-render these paths at build time
        fallback: false, // Show 404 for non-existent paths
    };
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch("http://localhost:3000/Data/data.json"); // Ensure this path is accessible
    const data = await res.json();

    return {
        props: {
            data, // Pass the fetched data to the page as props
        },
    };
}

const Id = ({ data }: { data: any }) => {
    const router = useRouter();
    const { id } = router.query;
    const numericId = id ? parseInt(id as string, 10) : undefined;

    return (
        <div
            className="flex justify-center items-center h-screen"
        >
            <CardWithForm id={numericId} data={data} />
        </div>
    )
}

export default Id
