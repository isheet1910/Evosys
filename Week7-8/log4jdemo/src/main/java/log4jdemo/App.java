package log4jdemo;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

public class App {

	private static final Logger LOGGER = LogManager.getLogger(App.class);

	public static void main(String[] args) {
		// BasicConfigurator.configure();
		// LOGGER.info("Info of logger");
		// LOGGER.error("Error ");
		// LOGGER.warn("Warning");
		System.out.println("DOMConfigurator");
		DOMConfigurator.configure("./src/main/resources/log4j.xml");
		LOGGER.debug("Sample debug message");
		LOGGER.info("Sample info message");
		LOGGER.warn("Sample warn message");
		LOGGER.error("Sample error message");
		LOGGER.fatal("Sample fatal message");
	}

}
