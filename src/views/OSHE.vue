<template>
<div class="container-fluid">
    <b-row>
    <b-col>
      <span>OSHE ASSETS</span>
      <bar-chart></bar-chart>
      </b-col>
    <b-col>
      <span>OSHE Category 0</span>
      <bar-chart></bar-chart>
      </b-col>
    </b-row>
    <b-row>
    <b-col>
      <span>Total Number of In Use</span>
      <bTable /><b-pagination align="right"></b-pagination>
      </b-col>
    </b-row>   
    <b-row>
    <b-col>
      <span>Total number of Tested</span>
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
import BarChart from '../components/BarChart'
import bTable from '../components/TableChart'


export default {
    components: {
        BarChart, bTable
    }
}
    </script>