import { useRouter } from 'next/navigation';
const courses = [
    { id: 1, name: 'Course 1', locked: false, topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 2, name: 'Course 2', locked: false, topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 3, name: 'Course 3', locked: false, topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 4, name: 'Course 4', locked: true, topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
    { id: 5, name: 'Course 5', locked: true, topics: ['Topic 1', 'Topic 2', 'Topic 3'] },
  ];
  
  const CourseList = ({ onSelectTopic, selectedCourseId, selectedTopic }) => {
  
    const handleCourseClick = (courseId) => {
      onSelectTopic({ courseId, topic: null });
    };
  
    const handleTopicClick = (courseId, topic) => {
      onSelectTopic({ courseId, topic });
    };
  
    return (
      <div className="w-1/3">
        <ul className="list-none p-0">
          {courses.map((course) => (
            <li key={course.id}>
              <div
                className={`p-2 cursor-pointer ${course.locked ? 'text-gray-400' : 'text-white'} ${selectedCourseId == course.id ? 'bg-green-500' : 'bg-gray-800'}`}
                onClick={() => !course.locked && handleCourseClick(course.id)}
              >
                {course.name}
              </div>
              {!course.locked && selectedCourseId == course.id && (
                <ul className="list-none p-0 mt-2">
                  {course.topics.map((topic, index) => (
                    <li
                      key={index}
                      className={`pl-4 cursor-pointer ${selectedTopic == topic ? 'text-green-500' : 'text-white'}`}
                      onClick={() => handleTopicClick(course.id, topic)}
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CourseList;
  