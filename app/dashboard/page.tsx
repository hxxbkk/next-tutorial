export default async function DashboardPage() {
  const response = await fetch('http://localhost:3000/api/test');
  const data = await response.json();

  console.log('data', data);
  return <>대시 보드 페이지</>;
}
