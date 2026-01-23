import { Mail, Send } from "lucide-react";

const Contact = ({ data }: { data: any }) => (
  <div className="max-w-2xl">
    <h2 className="text-3xl font-bold mb-8">Связь</h2>
    <p className="text-zinc-600 mb-10 text-lg">
      Буду рад обсудить ваши идеи или просто пообщаться.
    </p>

    <div className="space-y-4">
      <a
        href={`mailto:${data.contacts.email}`}
        className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 group"
      >
        <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-white transition-colors">
          <Mail size={24} />
        </div>
        <div>
          <div className="text-sm text-zinc-400">Email</div>
          <div className="font-medium text-zinc-900">{data.contacts.email}</div>
        </div>
      </a>

      <a
        href={`https://t.me/${data.contacts.telegram.replace("@", "")}`}
        className="flex items-center gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200 group"
      >
        <div className="p-3 bg-zinc-100 rounded-lg group-hover:bg-white transition-colors">
          <Send size={24} />
        </div>
        <div>
          <div className="text-sm text-zinc-400">Telegram</div>
          <div className="font-medium text-zinc-900">
            {data.contacts.telegram}
          </div>
        </div>
      </a>
    </div>
  </div>
);
export default Contact;
