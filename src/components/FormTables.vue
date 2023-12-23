<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props:{
       users:{
        type :Array,
        default: () => [
        { id: 1, name: 'Olzhas Yergali', email: '220107006@stu.sdu.edu.kz' },
        { id: 2, name: 'Zhantore Zhapparov', email: 'zxcdcs@ex.com' },
        { id: 3, name: 'ALbeni Makar', email: 'scadsvfdbgf@example.com' },
        // Add more user data as needed
      ],
       }
   
  }
}
  </script>
  
  <style scoped>
  /* Add your table styling here */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #3e3a3a;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #1aa8a5;
    color: #fff;
  }
  </style>
  