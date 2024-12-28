import { useState, ChangeEvent, FormEvent } from 'react';

type Comment = {
  text: string;
  date: string;
};

const CommentSection = () => {
  const [comments, setComments] = useState('');
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comments.trim()) {
      setIsSubmitting(true);
      const newComment = {
        text: comments.trim(),
        date: new Date().toLocaleString(), // Add date and time
      };
      setCommentList([...commentList, newComment]);
      setComments('');
      setFeedback('Comment submitted! Thank you!');
      setTimeout(() => {
        setFeedback('');
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const handleCommentDelete = (index: number) => {
    setCommentList(commentList.filter((_, i) => i !== index));
  };

  const handleCommentEdit = (index: number, newText: string) => {
    const updatedComments = commentList.map((comment, i) =>
      i === index ? { ...comment, text: newText } : comment
    );
    setCommentList(updatedComments);
  };

  return (
    <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
      {feedback && <p className="text-green-600 mb-4">{feedback}</p>}
      <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
        <textarea
          value={comments}
          onChange={handleCommentChange}
          placeholder="Add your comment here..."
          className={`w-full h-24 p-4 text-black border rounded-md focus:outline-none focus:ring-2 border-gray-300 transition duration-300 resize-none`}
          maxLength={200}
          required
        />
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{comments.length}/200</span>
          <button
            type="submit"
            className={`inline-flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 border-0 py-2 px-4 focus:outline-none rounded-lg shadow-md transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            Submit Comment
          </button>
        </div>
      </form>
      <div className="mt-4 max-h-60 overflow-y-auto">
  {commentList.length > 0 ? (
    <ul className="space-y-4">
      {commentList.map((comment, index) => (
        <li
          key={index}
          className="bg-gray-100 border border-gray-300 rounded-lg p-4 shadow-sm"
        >
          <div className="sm:flex justify-between items-center mb-2">
            <div className="space-x-2">
              <button
                onClick={() => {
                  const newText = prompt('Edit your comment:', comment.text);
                  if (newText !== null && newText.trim() !== '') {
                    handleCommentEdit(index, newText.trim());
                  }
                }}
                className="text-blue-500 hover:underline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleCommentDelete(index)}
                className="text-red-500 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
            <span className="text-gray-500 text-xs">{comment.date}</span>
          </div>
          <div className="text-gray-800 text-base">
            <p className="capitalize">{comment.text}</p>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-700">No comments yet.</p>
  )}
</div>
    </div>
  );
};

export default CommentSection;