export async function GET(
  _request: Request,
  {params}: {
    params: {
      courseCode: string;
    }
  }) {
  const res = await fetch(`https://syedfaysel.github.io/json-api/ocw/courses.json`);
  // courses.map((c) => c.courseCode === params.courseCode)
  
  return Response.json({
    status: 200,
    body: {
      message: 'Hello from course API',
    },
  });
}