import styles from './styles.module.css'

type DefaultInputProps = {
    id: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ id, type, ...props }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>task</label>
            <input className={styles.input} id={id} type={type} {...props} />
        </>
    )
}