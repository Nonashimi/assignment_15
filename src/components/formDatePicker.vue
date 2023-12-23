<template>
    <div>
      <input type="text" v-model="selectedDate" @focus="showDatePicker = true" />
      <div v-if="showDatePicker">
        <div>
          <select v-model="selectedMonth" @change="updateDate">
            <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
          </select>
          <select v-model="selectedYear" @change="updateDate">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="week in calendar" :key="week">
              <td v-for="day in week" :key="day.date" @click="selectDate(day)">
                {{ day.date !== 0 ? day.date : '' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDatePicker: false,
        selectedDate: '',
        selectedMonth: '',
        selectedYear: '',
        daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January', 'February', 'March', 'April',
          'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December'
        ],
        years: [],
      };
    },
    computed: {
    
    },
    methods: {
      generateCalendar(year, month) {
      const calendar = [];
      const firstDay = new Date(year, month - 1, 1);
      const lastDay = new Date(year, month, 0);
      const daysInMonth = lastDay.getDate();

      let currentDay = 1;
      for (let week = 0; week < 6; week++) {
        const weekArray = [];

        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
          if ((week === 0 && dayOfWeek < firstDay.getDay()) || currentDay > daysInMonth) {
            // Add placeholder for empty cells before the first day or after the last day
            weekArray.push({ date: 0 });
          } else {
            weekArray.push({ date: currentDay });
            currentDay++;
          }
        }

        calendar.push(weekArray);

        if (currentDay > daysInMonth) {
          break;
        }
      }

      return calendar;
    },

    updateDate() {
      this.calendar = this.generateCalendar(this.selectedYear, this.selectedMonth);
    },
  

     
      selectDate(day) {
        this.selectedDate = `${this.selectedYear}-${this.selectedMonth}-${day.date}`;
        this.showDatePicker = false;
      },
    },
    mounted() {
      this.years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);
    },
  };
  </script>
  
  <style>
  </style>
  