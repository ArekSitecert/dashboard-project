<template>
<div class="container-fluid">
    <b-row>
    <b-col>
        <span>Count Distinct of Asset by Category</span>
        <bar-chart></bar-chart>
        </b-col>
    <b-col>
        <span>Count Distinct of Asset by Location</span>
        <pie-chart></pie-chart>
        </b-col>
    </b-row>
    <b-row>
    <b-col>
        <span>Count Distinct of Asset by Category 1</span>
        <bar-chart></bar-chart>
        </b-col>
    </b-row>
    <b-row>
    <b-col>
        <span>Count Distinct of Asset by Category 2</span>
        <bar-chart></bar-chart>
        </b-col>
    <b-col>
        <span>Count Distinct of Asset by Category 3</span>
        <bar-chart></bar-chart>
        </b-col>
    </b-row>
    <b-row>
    <b-col>
    <span>Count Distinct of Asset by Barcode, Legacy Id, Division, Cost Centre, Manufacturers Serial 1, Manufacturers Serial 2, Categories, and Location 1</span>
    <bTable />
    <b-pagination align="right"></b-pagination></b-col>
    </b-row>
            <div>
            <b-button-toolbar aria-label="Dashboard Toolbar">
             <b-dropdown id="dropdown-dropright" dropright text="Export">
                <b-dropdown-item>to Pdf</b-dropdown-item>
                <b-dropdown-item>to Excel</b-dropdown-item>
                </b-dropdown>
            </b-button-toolbar>
        </div>
</div>
</template>
    <script>
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import bTable from '../components/TableChart'


export default {
    components: {
        PieChart,BarChart, bTable
    }
}
    </script>