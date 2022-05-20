import useForm from '../../hooks/form';

export default function EntriesForm({
   onSubmit,
   entry = {}
}) {

    const { date = '', description = '', dream_significance = '', nightmare = '' } = entry;

    const { formState, handleChange } = useForm({ date, description, dream_significance, nightmare });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await onSubmit(formState);
        } catch (error) {
            throw new Error(error.message);
        }
    };


  return (
      <form onSubmit={handleSubmit}>
          <fieldset>
        <section>
          <label>Date of dream:</label>
          <input
          id="date"
          name="date"
          type="text"
          value={formState.date}
          onChange={handleChange}
          />
        </section>
        <section>
          <label>Description of dream:</label>
          <input
          id="description"
          name="description"
          type="text"
          value={formState.description}
          onChange={handleChange}
          />
        </section>
        <section>
          <label>Significance of dream:</label>
          <input
          id="dream_significance"
          name="dream_significance"
          type="text"
          value={formState.dream_significance}
          onChange={handleChange}
          />
        </section>
        <section>
          <label>Was this dream a nightmare:</label>
          <input
          id="nightmare"
          name="nightmare"
          type="text"
          value={formState.nightmare}
          onChange={handleChange}
          />
        </section>  
        <button type='submit'>
            Save dream 🌙
        </button>
        </fieldset> 
      </form>
    )
  
  
}
