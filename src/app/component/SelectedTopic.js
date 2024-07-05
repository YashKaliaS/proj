const SelectedTopic = ({ selectedTopic }) => {
    if (!selectedTopic) return <div className="w-2/3 p-4 border-r border-gray-700 text-white">Select a course and topic</div>;
  
    return (
      <div className="w-2/3 p-4 border-r border-gray-700">
        <div className="text-white">
          <h1>Course {selectedTopic.courseId}</h1>
          <p>{selectedTopic.topic}</p>
        </div>
      </div>
    );
  };
  
  export default SelectedTopic;
  