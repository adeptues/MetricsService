package com.dev.metrics.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dev.metrics.dao.Metrics;
import com.yammer.metrics.annotation.Timed;

import java.util.List;

@Path("/metricsview")

public class MetricsResource
{
	private final Metrics metrics;

	public MetricsResource(Metrics metrics)
	{
		this.metrics = metrics;
	}

	@GET
	@Timed
    @Produces(MediaType.TEXT_HTML)
	public MetricsView getMetrics()
	{
		return new MetricsView(metrics);
	}

    @GET
    @Path("/urls")
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> metricsUrls(){
        return metrics.getUrls();
    }

}
