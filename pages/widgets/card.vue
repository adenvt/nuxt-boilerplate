<template>
  <div class="content-container">
    <b-row>
      <b-col md="4">
        <b-card class="widget no-border text-center">
          <span class="widget-thumbnails mb-2">
            <img
              src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
              class="img-fluid img-thumb"
            >
          </span>

          <div class="widget-meta">
            <h3>Jhon Doe</h3>
            <span>CEO/Founder Boilerplate</span>
          </div>

          <div class="widget-description">
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequatur corporis delectus eius
            </p>
          </div>
          <div class="widget-share mt-3">
            <span class="icon">
              <i class="icon-social-twitter" /> 184 Followers
            </span>
            <span class="icon">
              <i class="icon-social-linkedin" /> 1229 Followers
            </span>
          </div>
        </b-card> <!-- .widget -->
      </b-col> <!-- .b-col -->
      <b-col md="8">
        <b-row>
          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-cloud-download" />
              Total Downloads
              <span>201</span>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-basket-loaded" />
              Products Sold
              <span>212</span>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-people" />
              Total Users
              <span>345</span>
            </b-card>
          </b-col>

          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-picture" />
              Total Images
              <span>2022</span>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-chart" />
              Statistics
              <span>212</span>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="widget widget-icon no-border">
              <i class="icon-star" />
              Achievements
              <span>45</span>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name  : 'Card',
}
</script>
