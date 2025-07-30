import { User } from "../../hooks/useUsers";
import { Search } from "../../components/Search";
import { useState } from "react";

interface Props {
  users: User[];
  chooseUser: (user: User) => void;
  searchUsers: (search: string) => void;
}

export const UsersOption = ({ users, chooseUser, searchUsers }: Props) => {
  const [search, setSearch] = useState("")

  const handleSearchUsers = (search: string) => {
    setSearch(search)
    searchUsers(search)
  }

  const choosedUser = (user: User) => {
    chooseUser(user)
  }

  return (
    <div className="h-70 overflow-y-auto">
      <Search searchItems={handleSearchUsers} search={search} />
      
      {
        users.map((user) => (
          <div key={user.id} onClick={() => choosedUser(user)} className='mb-3 border border-zinc-500 rounded-xl py-3 px-2 flex gap-4 text-zinc-800 hover:bg-zinc-200 cursor-pointer shadow-md'>
            <div className='bg-zinc-300 rounded-full w-12 h-12 flex items-center justify-center'>
              <span className='text-2xl font-light p-2'>{`${user.name[0]}${user.lastname[0]}`}</span>
            </div>
            <div className="w-40">
              <h3 className='text-lg truncate'>{`${user.name} ${user.lastname}`}</h3>
              <p className='text-zinc-650 text-sm truncate'>{user.email}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};
