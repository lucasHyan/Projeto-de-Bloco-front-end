import { Formik, Form } from "formik";
import { Mention, MentionsInput } from "react-mentions";
import { GlobalStore } from "../../GlobalStore";

const accounts = GlobalStore.getState().accounts.map((account) => ({
  id: account.username,
  display: account.username,
}));

export function CommentForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    onSubmit({ ...values, date: formattedDate });
    resetForm();
  };

  return (
    <Formik initialValues={{ message: "" }} onSubmit={handleSubmit}>
      {({ values, handleChange, handleBlur }) => (
        <Form
          className="grid grid-rows-1 grid-cols-1 w-full font-roboto gap-1 bg-white shadow-md rounded-lg p-4"
          style={{ gridTemplateAreas: `"message message"` }}
        >
          <MentionsInput
            value={values.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            className="w-full px-3 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
            style={{ gridArea: "message" }}
          >
            <Mention
              trigger="@"
              data={accounts}
              renderSuggestion={(
                suggestion,
                search,
                highlightedDisplay,
                index,
                focused
              ) => (
                <div
                  className={`user ${
                    focused ? "bg-blue-100" : ""
                  } p-2 rounded-md`}
                >
                  {highlightedDisplay}
                </div>
              )}
            />
          </MentionsInput>
          <button
            type="submit"
            className="ml-auto px-4 py-2 border bg-primary hover:bg-highlight focus:border-primary focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase"
          >
            Comentar
          </button>
        </Form>
      )}
    </Formik>
  );
}
