export default function FilterGroup({methodPost, sendTo, className, children}) {
    return (
        <form action={sendTo} method={methodPost ? 'POST' : 'GET'} 
          className={className}>
            {children}
        </form>
    )
  }