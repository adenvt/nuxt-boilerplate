<template>
  <div class="content-container">
    <b-card header-tag="header">
      <template slot="header">
        <h6>Header Table</h6>
      </template>

      <b-row class="mb-1">
        <b-col md="4">
          <b-form-group
            :label-cols="3"
            horizontal
            label-size="md"
            label="Per Page"
          >
            <b-col
              md="6"
              lg="6"
            >
              <b-form-select
                v-model="params.limit"
                :options="pageOptions"
              />
            </b-col>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-input-group
            horizontal
          >
            <b-col
              md="4"
              class="text-right p-1"
            >
              Select Date
            </b-col>
            <b-col md="4">
              <datepicker
                v-model="range.start"
                bootstrap-styling
                format="dd MMM yyyy"
              />
            </b-col>
            <b-col md="4">
              <datepicker
                v-model="range.end"
                bootstrap-styling
                format="dd MMM yyyy"
              />
            </b-col>
          </b-input-group>
        </b-col>
        <b-col md="2">
          <b-button
            size="sm"
            variant="warning btn-block"
          >
            Export
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col md="7">
          <b-row>
            <b-col md="4">
              <b-input-group>
                <b-input-group-text slot="prepend">
                  By Status
                </b-input-group-text>
                <b-form-select
                  v-model="params.limit"
                  :options="pageOptions"
                />
              </b-input-group>
            </b-col>
            <b-col md="4">
              <b-input-group>
                <b-input-group-text slot="prepend">
                  Maketing Code
                </b-input-group-text>
                <b-form-input />
              </b-input-group>
            </b-col>
            <b-col md="4">
              <b-input-group>
                <b-input-group-text slot="prepend">
                  Area Code
                </b-input-group-text>
                <b-form-input />
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="5">
          <b-input-group>
            <template slot="append">
              <b-btn variant="primary">
                Search
              </b-btn>
            </template>
            <b-form-input placeholder="Enter Your Keywords" />
          </b-input-group>
        </b-col>
      </b-row>
      <b-table
        :items="items"
        hover
      />
    </b-card>
  </div>
</template>

<script>
import moment from 'moment'
const items = [
  {
    isActive  : true,
    age       : 40,
    first_name: 'Dickerson',
    last_name : 'Macdonald',
  },
  {
    isActive  : false,
    age       : 21,
    first_name: 'Larsen',
    last_name : 'Shaw',
  },
  {
    isActive  : false,
    age       : 89,
    first_name: 'Geneva',
    last_name : 'Wilson',
  },
  {
    isActive  : true,
    age       : 38,
    first_name: 'Jami',
    last_name : 'Carney',
  },
]
export default {
  data () {
    return {
      items : items,
      params: { limit: 10 },
      range : {
        start: moment()
          .startOf('M')
          .toDate(),
        end: moment()
          .endOf('M')
          .toDate(),
      },
      pageOptions: [
        10,
        20,
        50,
        100,
      ],
    }
  },
}
</script>
