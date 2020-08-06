<template>

<div class="container-fluid" >
    <b-row>
    <b-col>
        <span>Assets by Division</span>
        <pie-chart></pie-chart></b-col>
    <b-col>
        <span>Assets by Location</span>
        <pie-chart></pie-chart></b-col>
    </b-row>
    <b-row>
    <b-col>
        
        <bar-chart title="Assets by Sub Location"></bar-chart></b-col>
    </b-row>
    <b-row>
    <b-col>
        <span>Assets</span>
        <bTable /><b-pagination align="right"></b-pagination></b-col>
    </b-row>
    <b-row>
    <b-col>
        <span>Events Due</span>
        <bTable /><b-pagination align="right"></b-pagination></b-col>
    </b-row>
    <b-row>
    <b-col>
        <span>All Events</span>
        <bTable /><b-pagination align="right"></b-pagination></b-col>
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
        PieChart,BarChart,bTable
    }
}
    </script>