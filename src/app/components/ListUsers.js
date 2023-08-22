export default async function ListUser({users}) {
    await new promise ((resolve) => setTimeout(resolve,500));
    return(
        {users?.map((user, index) =>
            <p key={index}>
            {user.name}
            </p>
            )}
    )
}