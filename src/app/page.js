'use client'
import { useState } from 'react';
import Head from 'next/head';
import CourseList from './component/CourseList';
import SelectedTopic from './component/SelectedTopic';


export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState({ courseId: null, topic: null });

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Head>
        <title>Course List</title>
      </Head>
      <SelectedTopic selectedTopic={selectedTopic} />
      <CourseList 
        onSelectTopic={setSelectedTopic}
        selectedCourseId={selectedTopic.courseId}
        selectedTopic={selectedTopic.topic}
      />
    </div>
  );
}
