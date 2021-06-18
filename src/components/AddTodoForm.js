import {useRouter} from 'next/router'
import styles from '../../styles/AddTodoForm.module.css'

export function AddTodoForm() {
    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData(e.target)    
        const res = await fetch('/api/add-todo', {
            method: 'POST',
            body: new URLSearchParams(formData)
        })
        const body = await res.json()

        await router.replace(body.location)
        e.target.reset()
    }

    return (
      <form action="/api/add-todo?redirect" method="post" onSubmit={handleSubmit} className={styles.container}>
        <div>
          <label htmlFor="todo">Add a todo</label>
          <input type="text" name="todo" id="todo" placeholder="Buy some bread..." />
        </div>
  
        <button type="submit">Add</button>
      </form>
    );
  }