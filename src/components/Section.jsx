export default function Section({ title, subtitle, children, id }) {
    return(
        <section>
            <h2 id={id}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {children}
        </section>
    )
}