import Head from 'next/head';
import CourseList from '../components/CourseList';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Course List</title>
      </Head>
      <main className="flex justify-center items-center h-screen">
        <CourseList />
      </main>
    </div>
  );
}
