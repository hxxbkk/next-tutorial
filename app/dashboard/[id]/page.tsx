'use client';

export default function Page({ params }: { params: { id: string } }) {
  const handleSubmit = async (e: React.FormEvent) => {
    const response = await fetch('/api/test/1234', {
      method: 'POST',
      headers: {
        'Content-Type': 'apllication/json',
      },
      body: JSON.stringify({ name: 'test name', email: 'test email' }),
    });
    const data = await response.json();

    console.log('reponse data', data);
  };

  return (
    <>
      다이나믹 라우트 페이지{params.id}
      <button type="submit" onClick={handleSubmit}>
        전송
      </button>
    </>
  );
}
