import axios from 'axios';
export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: {
      courseCode: string;
    };
  }
) {
  const res = await axios.get(
    `https://syedfaysel.github.io/json-api/ocw/courses.json`
  );
  console.log(res.data);
  // courses.map((c) => c.courseCode === params.courseCode)

  return Response.json({
    message: "success",
    data: res.data,
  }, { status: 200 })};

