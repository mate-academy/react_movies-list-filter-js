import { Field } from "./components/FieldComponent/Field"

export const Box = ({
    query,
    setQuery,
    setVisibleMovies
}) => {
    return(
        <>
            <div className="box">
                <Field 
                    setQuery={setQuery}
                    setVisibleMovies={setVisibleMovies}
                />
            </div>
        </>
    )
}