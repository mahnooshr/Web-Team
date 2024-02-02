from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def access_server1(self):
        self.client.get("http://localhost:8000")

    @task
    def access_server2(self):
        self.client.get("http://localhost:8001")
