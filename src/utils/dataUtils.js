export function filterData(data, query) {
    const lowerCaseQuery = query.toLowerCase();
    return data.filter((user) => {
      const { name, email, role } = user;
      return (
        name.toLowerCase().includes(lowerCaseQuery) ||
        email.toLowerCase().includes(lowerCaseQuery) ||
        role.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }
  
  export default filterData;