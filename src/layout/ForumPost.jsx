import { FaFlag, FaArrowLeft, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ForumPost({
  title = "Placeholder Title",
  content = "Placeholder Content",
  author = "Placeholder Author",
  date = "Placeholder Date",
  photo = "https://source.unsplash.com/random/600x600",
  onClick,
  children,
}) {
  const navigate = useNavigate();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
  };

  return (
    <div className="bg-secondary p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div>
            <button
              className="text-center text-lg"
              onClick={() => alert("O post foi denunciado")}
            >
              <FaFlag className="w-6 h-6 mr-2" />
            </button>
            <button
              className="text-center text-lg"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <button
              className="text-center text-lg"
              onClick={copyToClipboard}
            >
              <FaLink className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-start p-4 bg-gray-300 ">
          <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 pr-4 w-1/5">
            <img
              src={photo}
              alt="Author"
              className="mb-2 rounded-full w-24 h-24 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">{author}</h2>
          </div>
          <div className="flex flex-col justify-between pl-4 w-4/5">
            <p className="text-sm text-gray-500">{date}</p>
            <p className="text-gray-700 text-left">{content}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}