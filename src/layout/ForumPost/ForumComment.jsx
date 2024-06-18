export function ForumComment({
  author = "Placeholder Author",
  date = "Placeholder Date",
  content = "Placeholder Content",
  src = "",
}) {
  return (
    <div className="flex flex-col sm:flex-row items-start p-4 border-t border-black w-full">
      <div className="flex flex-col items-start pr-4 w-full sm:w-1/5 mb-4 sm:mb-0">
        <div className="flex flex-row sm:flex-col items-center">
          <img
            src={src}
            alt={`Author ${author}`}
            className="mr-2 sm:mb-2 rounded-full w-24 h-24 object-cover"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold mb-0 sm:mb-2">{author}</h2>
            <p>likes: ${}</p>
            <div />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pl-4 w-full sm:w-4/5">
        <hr className="border-1 border-gray-200" />
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-gray-700 text-left break-words">{content}</p>
      </div>
    </div>
  );
}
