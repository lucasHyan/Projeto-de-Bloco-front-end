import { Formik, Form } from 'formik';
import { Mention, MentionsInput } from 'react-mentions';

const users = [
  { id: '1', display: 'Walter' },
  { id: '2', display: 'Lucas' },
  { id: '3', display: 'Maria' },
  { id: '4', display: 'João' },
  { id: '5', display: 'Ana' },
];

const CommentForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ message: "" }}
    onSubmit={(values, { resetForm }) => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
      onSubmit({ ...values, date: formattedDate });
      resetForm();
    }}
  >
    {({ values, handleChange, handleBlur }) => (
      <Form
        className="grid grid-rows-1 grid-cols-1 w-full font-roboto gap-1"
        style={{ gridTemplateAreas: `"message message"` }}
      >
        <MentionsInput
          value={values.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          className="w-full px-3 border focus:border-primary focus:outline-none "
          style={{ gridArea: "message" }}
        >
          <Mention
            trigger="@"
            data={users}
            renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
              <div className={`user ${focused ? 'focused' : ''}`}>
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

export default CommentForm;