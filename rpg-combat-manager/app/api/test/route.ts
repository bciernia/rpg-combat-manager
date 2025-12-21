import { createConnection } from "@/backend/db/db";
import { NextResponse } from "next/server";

export const GET = async () => {

    try {
        const db = await createConnection();
        const [rows] = await db.execute("SELECT * FROM test_table");
        return NextResponse.json(rows);
    } catch (error) {
        return NextResponse.json({ message: "Error connecting to database" }, { status: 500 });
    }

}
