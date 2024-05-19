import { Grid, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Title, Tooltip, Legend } from "chart.js/auto"; // Importing necessary components from "chart.js/auto"
import faker from "faker";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Books",
    },
  },
};

const labels = ["Fiction", "Thriller", "Science", "Horror", "Mystery"];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Book by genre",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#23395d",
    },
  ],
};

function Chart() {
  return (
    <Grid
      container
      sx={{ width: { sm: "100%", md: "80%" }, mt: "2rem", margin: "0 auto" }}
      justifyContent="center"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        color="primary"
      >
        Thống kê sách theo thể loại
      </Typography>

      <Bar options={options} data={data} />
    </Grid>
  );
}

export default Chart;
