import { describe, expect, test } from "@jest/globals";
import request from "supertest";

describe("Get player information", () => {
    const baseUrl = "http://localhost:5001/api/v1/user";

    test("should return Ok", async () => {
        const response = await request(baseUrl).get("/5");

        expect(response.text).toBe("Ok");
    });
});
