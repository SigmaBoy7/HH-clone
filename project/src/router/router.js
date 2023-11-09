import {createRouter, createWebHistory} from "vue-router";
import IntroPage from "@/page/IntroPage"
import SearchPage from "@/page/SearchPage"
import ResumeListPage from "@/page/ResumeListPage"
import CreateResumPage from "@/page/CreateResumPage"

const routes = [
    {
        path: '/',
        component: IntroPage
    },
    {
        path: '/search',
        component: SearchPage
    },
    {
        path: '/resumes',
        component: ResumeListPage
    },
    {
        path: '/resume/create',
        component: CreateResumPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


export default router;