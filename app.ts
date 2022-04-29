/* Запрос */
{
	"topicId": 5,
	"status": "published" // "draft", "deleted" - optional
}
/* Ответ */
 [
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]
enum QuestionStatus {
    Published = "published",
    Draft = "draft",
    Deleted = "deleted"
}
interface RequestValue {
    topicId: number,
    status?: QuestionStatus.Published
}
interface AnswerValue {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: string;
}

const getFaqs = async (req:RequestValue): Promise<AnswerValue[]> => {
    const res = await fetch('./faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    })
    const data = await res.json()
    return data
}