import { promises as fs } from "fs";
import axios from "axios";

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  try {
    const id = params.id;
    // console.log(id);
    // const file = await fs.readFile(process.cwd() + "/app/_data.json", "utf8");
    // const data: any = JSON.parse(file);

    const res = await axios.get(
      `https://syedfaysel.github.io/json-api/bsa/reg24.json`
    );
    // console.log(res.data);

    const result = res.data.filter((s: any) => {
      return s.id == id;
    });

    if (result.length == 0) {
      return Response.json(
        {
          message: "id not found",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        message: "success",
        result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json(
      {
        message: "failed",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
